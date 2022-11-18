/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
*/
const timeout = (ms = 1000) => new Promise((resolve)=> setTimeout(resolve,ms));

const generateRandomNumber = () => Math.floor(Math.random() * 40);

const generateData = async() => {
    await timeout(1000)
    return Promise.all(Array.from({ length: 20 }, generateRandomNumber));

}

const convertToFeet = async (meters) => {
    const feet = meters * 3.2808;
    await timeout();
    logResult(meters, feet)

}

const processData = async (data) => {

    await Promise.all(data.map(value => convertToFeet(value)))
}

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
}

const main = async () => {

    console.log("Start");
    const data = await generateData()
    await processData(data)

    console.log("Finish");

}

main();