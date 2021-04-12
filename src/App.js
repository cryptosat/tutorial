// import logo from './logo.svg';
import Console from "./Console.js"
import Tutorial from "./Tutorial.js"
import WorldMap from "./WorldMap.js"
import './App.css';

function App() {
  var ascii = [
"                         ```                                                   ",
"                        -+/::-.                                                ",
"                     `.:/+oo+oo:`                                              ",
"                    ./o+/:/sss/::-`                                            ",
"                    ::/osos+/+oo/oo:`                                          ",
"                    `-/osos+/:/sss+::-`                                        ",
"                      .//:/oooso/+so/+o:`                                      ",
"                        `-/+sss+/:/osy+/:-`                                    ",
"                          .+/:/oo+ss++o+//o:`                                  ",
"                            `-:+sss+:::+syo/:-`                                ",
"                              .++//+o/os++s+/:-                                ",
"                               `-:/syy+/:/os/`  `````://-                      ",
"                                   .++//oo/+syyo/osssosyyyy/                   ",
"                                    .::::+syyyyyyyyyyyyyyy+                    ",
"                                      ..  :yyyyyyyyyyyyyy+`                    ",
"                               `.:/+ooo++oyyyyyyyyyyyyyyyo                     ",
"                             -+yyyyyyyyyyyyyyyyyyyyyyyyyy/                     ",
"                            --:+oyyyyyyyyyyyyyyyyyyyyyyyy-  ..                 ",
"                            .....-/oyyyyyyyyyyyyyyyyyyyyyyo/:::.               ",
"                             .......:+yyyyyyyyyyyyyyooyys//os+/oo.             ",
"                              `.......-+yyyyyyyyyyy-  :so/:/+yys/::.           ",
"                               `...-::/.-+yyyyyyyyy: -:/+sooso/oo//+o.         ",
"                           .-.-::/++sso...:oyyyyyyy:  .:/oyso/://sso/:-.       ",
"                           +s/-.``//:s-....-/syyyyy.    :+//+so+so/+o/:/+.     ",
"                           `` ``:/. :/.......:syyy+      `.:/+sso:://sss+/-`   ",
"                             `ss-  .+` `......-syo`        `:o/:+o+/os+oo/://.   ",
"                              ..  .o/    ``....:/`           `.::+sss/:/+soso/-` ",
"                                  -+-         ``               `:o+/+s+/+soso/:: ",
"                                                                 `-::/sss/:/+o/` ",
"                                                                   `-oo/oo+/:.`  ",
"                                                                     `-::/+-`  ",
"                                                                       ````    "
    ].join("\n")

return (
    <div className="App">
      <Tutorial />
      <Console>
        {"Welcome to the Cryptosat Simulator v0.1!"}<br />&nbsp;
        <code><pre>{ascii}</pre></code>
        <br />Documentation: type "help"<br />&nbsp;<br />
      </Console>
      <WorldMap />
    </div>
  );
}

export default App;
