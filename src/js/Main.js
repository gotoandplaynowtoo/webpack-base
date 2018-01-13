import 'babel-polyfill';

import Class1 from './lib/Class1';
import Class2 from './lib/Class2';

class Main {
    static main(args) {
        console.log('Main.js works!');
        Class1.test();
        Class2.test();
    }
}

Main.main([]);