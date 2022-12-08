//promise 
const showDownload = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Download Selesai");
        }, 3000);
    });
};

const result = "Windows-10.exe";
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hasil Download : " + result);
        }, 3000);
    });
};

//consuning async-wait
const main = async () => {
    console.log(await showDownload());
    console.log(await download);
}

main();