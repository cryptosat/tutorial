// import logo from './logo.svg';
import Console from "./Console.js"
import Tutorial from "./Tutorial.js"
import WorldMap from "./WorldMap.js"
import './App.css';

function App() {

	var ascii = ` 	 							  
            -:-'                                  
          .//os/-'                                
          .+oo/os+-'                              
           '-+oo/os+-'                            
             '-/so:+o+-'                          
               '-/os/++''..::                     
                 '-:/syyyyyyy-                    
               .:////syyyyyys                     
              -/oyyyyyyyyyyyo'.'                  
              '..-/syyyyys+so+++:'                
               '-:/:/syyy+':+oo+++:'              
             .:--:+-.-+yy/  :/+o+/++:'            
               /..-'.../o'    :/++o++/:'          
                 -'    '        :/++oo+:          
                                  :++/.           
                                    '			  `

return (
    <div className="App">
      <Tutorial />
      <Console>
        {"Cryptosat Simulator v0.1"}<br />&nbsp;
        <code><pre>{ascii}</pre></code>
        <br />Usage: type "help"<br />&nbsp;<br />
      </Console>
      <WorldMap />
    </div>
  );
}

export default App;
