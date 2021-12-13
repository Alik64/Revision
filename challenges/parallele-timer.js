let proms = [],
    promises = [];

const scriptsAmount = 10,
    startAt = 0,
    endAt = 100;
const instanceInParallel = parseInt((endAt - startAt) / scriptsAmount); // 10

async function nestedPromise({ startAt, endAt }) {
    // startAt: 0, 10, 20..., 80, 90
    // endAt: 9, 19, 29..., 89, 99
    for (let i = startAt; i < endAt; i++) {
        proms.push(
            new Promise((resolve) => {
                setTimeout(() => resolve(console.log(i)), (i % 10) * 1);
            })
        );
    }

    return proms;
}

async function main() {
    // index: 0, 1, 2, ..., 10 - as 10 instances in parallel
    for (let index = 0; index < scriptsAmount; index++) {
        promises.push(
            new Promise((resolve) => {
                resolve(
                    nestedPromise({
                        startAt: startAt + instanceInParallel * index,
                        endAt: startAt + instanceInParallel * (index + 1),
                    })
                );
            })
        );
    }

    await Promise.all(promises);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});