export class Utils {
    static intToBytes(num, littleEndian = false) {
        const buffer = new ArrayBuffer(4);
        const view = new DataView(buffer);
        view.setUint32(0, num, littleEndian);
        return new Uint8Array(buffer);
    }

    static stringToU8arr(bStr) {
        return new TextEncoder().encode(bStr);
    }

    static u8Arr2Hex(u8) {
        return Array.from(u8, b => b.toString(16).padStart(2, '0')).join('');
    }

    static mergeTypedArrays(a, b) {
        const merged = new Uint8Array(a.length + b.length);
        merged.set(a, 0);
        merged.set(b, a.length);
        return merged;
    }

    static desDecrypt() {
        throw new Error('DES decryption is unavailable in the stub crypto module. Provide src/lib/crypto.obfuscate.js to enable it.');
    }

    static desEncrypt() {
        throw new Error('DES encryption is unavailable in the stub crypto module. Provide src/lib/crypto.obfuscate.js to enable it.');
    }

    static sha512() {
        throw new Error('SHA-512 is unavailable in the stub crypto module. Provide src/lib/crypto.obfuscate.js to enable it.');
    }
}

export class Crypto {
    static encrypt() {
        throw new Error('Save encryption is unavailable in the stub crypto module. Provide src/lib/crypto.obfuscate.js to enable it.');
    }

    static decrypt() {
        throw new Error('Save decryption is unavailable in the stub crypto module. Provide src/lib/crypto.obfuscate.js to enable it.');
    }
}
