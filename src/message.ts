export async function message(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("hello world");
        }, 1000);
    });
}
