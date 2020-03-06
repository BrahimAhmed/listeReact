import React from 'react';
import './App.css';
import Image from './components/image/image.js';
import Menu from './components/menu/menu.js';
import Card from './components/card/card.js';
import Search from './components/search/search.js';


function App() {
  return (
    <div className="App">
      <Image/>
      <Menu/>
      <Search/>
      <Card title="Leo Messi" image="messi.jpg" description="Lionel Andrés Messi is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six Ballon d'Or awards,and a record six European Golden Shoes. He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, four UEFA Champions League titles ..."/>
      <Card title="Neymar Jr" image="neymar.jpg"  description="Neymar da Silva, commonly known as Neymar Jr. or simply Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. He is widely considered as one of the best players in the world. Neymar came into prominence at an early age at Santos, where he made his professional debut aged 17. He helped the club win two successive Campeonato Paulista championships, a Copa do Brasil, and the 2011 Copa Libertadores, with the latter being Santos' ..."/>
      <Card title="Luis Suarez"  image="suarez.jpg"  description="Luis Suárez is a Uruguayan professional footballer who plays as a striker for Spanish club Barcelona and the Uruguay national team. Often regarded as one of the best players in the world,[note 1] Suárez has won 18 trophies in his career, which include six league titles, a UEFA Champions League title at club level, and a Copa América with Uruguay. A prolific goalscorer, Suárez has won two European Golden Shoes, an Eredivisie Golden Boot, a Premier League Golden Boot, also ending the six-year ... "/>
    </div>
  );
}

export default App;
