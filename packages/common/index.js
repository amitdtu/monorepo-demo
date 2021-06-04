const commonFunc = () => console.log("Hello from common function");
const loginFunc = () => setTimeout(() => alert("login successful"), 1000);

export { commonFunc, loginFunc };
