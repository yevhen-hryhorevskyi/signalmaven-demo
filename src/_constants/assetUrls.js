let assetRootUrl;

if (process.env.NODE_ENV !== 'production') {
    assetRootUrl = "./assets"; // for dev builders
} else {
    assetRootUrl = "./bin/assets"; // for prod builders
}

export const RoboticArm = `${assetRootUrl}/robotic-arm.png`;
export const PdfIcon = `${assetRootUrl}/pdf.png`;
export const DocIcon = `${assetRootUrl}/doc.png`;
export const TxtIcon = `${assetRootUrl}/txt.jpg`;
export const DownloadIcon = `${assetRootUrl}/download.png`;
