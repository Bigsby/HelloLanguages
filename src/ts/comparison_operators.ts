import * as process from "process";

let result = 1 == 2;
process.stdout.write("1 equals 2 is " + result);

result = 1 != 2;
process.stdout.write("1 not equals 2 is " + result);

result = 1 > 2;
process.stdout.write("1 larger than 2 is " + result + "\n");

result = 1 >= 2;
process.stdout.write("1 larger than or equals 2 is " + result + "\n");

result = 1 < 2;
process.stdout.write("1 less than 2 is " + result + "\n");

result = 1 <= 2;
process.stdout.write("1 less than or equals 2 is " + result + "\n");