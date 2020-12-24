import React from "react";
import Card from "./Card";
import Article from "./Article";

function App() {
  return (
    <div className="wrapper">
      <h2>
        <strong>
          Books to Read<span>( 10 )</span>
        </strong>
      </h2>

      <div className="cards">
        <Card
          src="https://www.patrickbetdavid.com/wp-content/uploads/2016/10/mastery.jpg"
          figcaption="Mastery"
        />
        <Card
          src="https://www.patrickbetdavid.com/wp-content/uploads/2016/10/33-strategies-of-war.jpg"
          figcaption="Strategy War"
        />
        <Card
          src="https://www.patrickbetdavid.com/wp-content/uploads/2016/10/great_business_teams.jpg"
          figcaption="Business Teams"
        />
        <Card
          src="https://www.patrickbetdavid.com/wp-content/uploads/2016/10/the-e-myth-revisited.jpg"
          figcaption="Business Myths"
        />
        <Card
          src="https://www.patrickbetdavid.com/wp-content/uploads/2016/10/a-first-rate-madness.jpg"
          figcaption="LeaderShip"
        />
      </div>

      <h2>
        <strong>Things Worth Reminding ?</strong>
      </h2>

      <div className="news">
        <Article
          src="https://img.youtube.com/vi/V-a-nW0Frx8/maxresdefault.jpg"
          title="It's Awesome"
          paragraph="In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut."
        />
        <Article
          src="https://img.youtube.com/vi/TXh29vJSY94/maxresdefault.jpg"
          title="Self-Motivated"
          paragraph="If you require to watch motivational videos to get into your potential state then something definitely needs to change. Leaders are self-motivated and are often moved by Curiousity."
        />
      </div>
    </div>
  );
}

export default App;
