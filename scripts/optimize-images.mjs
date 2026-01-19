import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const supportedExts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const maxDimension = 1600;
const quality = 80;

const files = await fs.readdir(publicDir);
let processed = 0;

for (const file of files) {
	const ext = path.extname(file).toLowerCase();
	if (!supportedExts.has(ext)) continue;

	const fullPath = path.join(publicDir, file);
	const stat = await fs.stat(fullPath);
	const beforeSize = stat.size;

	const input = await fs.readFile(fullPath);
	const image = sharp(input, { failOnError: false });
	const metadata = await image.metadata();

	if (!metadata.width || !metadata.height) continue;

	const longestSide = Math.max(metadata.width, metadata.height);
	let pipeline = image;

	if (longestSide > maxDimension) {
		pipeline = pipeline.resize({
			width: metadata.width >= metadata.height ? maxDimension : undefined,
			height: metadata.height > metadata.width ? maxDimension : undefined,
			fit: "inside",
			withoutEnlargement: true
		});
	}

	switch (ext) {
		case ".jpg":
		case ".jpeg":
			pipeline = pipeline.jpeg({ quality, mozjpeg: true });
			break;
		case ".webp":
			pipeline = pipeline.webp({ quality });
			break;
		case ".png":
			pipeline = pipeline.png({ compressionLevel: 9, palette: true });
			break;
		default:
			break;
	}

	const output = await pipeline.toBuffer();
	await fs.writeFile(fullPath, output);
	const afterSize = output.length;

	if (afterSize !== beforeSize) {
		const delta = ((beforeSize - afterSize) / beforeSize) * 100;
		const sign = delta >= 0 ? "-" : "+";
		const percentage = Math.abs(delta).toFixed(1);
		console.log(`${file}: ${beforeSize} -> ${afterSize} bytes (${sign}${percentage}%)`);
		processed += 1;
	}
}

console.log(`Optimized ${processed} image(s).`);

