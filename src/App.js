
import 'babel-polyfill';

import './app.scss';

import Class1 from './js/lib/Class1';
import Class2 from './js/lib/Class2';

class App {
    static main(args) {
        console.log('Main.js works!');
        Class1.test();
        Class2.test();
    }
}

App.main([]);