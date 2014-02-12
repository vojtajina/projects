import {Injector} from 'di/injector';
import {GitHub} from './github';

var injector = new Injector();
var gh = injector.get(GitHub);
gh.getIssues();
