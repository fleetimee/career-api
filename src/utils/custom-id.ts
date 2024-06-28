import base64url from 'base64url';
import crypto from 'crypto';

// Function to generate a custom ID similar to YouTube IDs
export const generateCustomId = (prefix: string) => {
    const randomBytes = crypto.randomBytes(8); // 8 bytes = 64 bits
    const customId = base64url.encode(randomBytes);

    return `${prefix}_${customId}`;
};
