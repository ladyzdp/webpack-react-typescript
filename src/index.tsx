
// import Atm,{Index} from './apps/index/index';

// let person = new Atm('Mary',17);
// person.getname();
// new Index();
import * as ReactDOM from 'react-dom';
import * as React from 'react';

import CodeView from 'react-code-view';

import { Button } from './apps/button/button';

<CodeView dependencies={{ Button }} >
  {require('./apps/index/demo/index.md')}
</CodeView> 
Button();