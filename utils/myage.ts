let birthday = new Date("2010/08/14");
let diff = new Date().valueOf() - birthday.valueOf();
export let age = Math.floor(diff / 31536000000);

export let message: string;
