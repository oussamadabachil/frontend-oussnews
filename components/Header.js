import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [usernameSate, setUsernameState] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isSubscrided, setIsSubscrided] = useState(false);
  const [messageWelcome, setMessageWelcome] = useState("");
  const [username, setUsername] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLogin, setPassworLogin] = useState("");
  const [appearCong, setAppearCong] = useState(false);
  const [appearForm, setAppearForm] = useState(false);
  let styleFormBlurry = {};
  let styleForm = {};
  let styleFormCong = {};
  const changeBoolAppearCong = () => {
    setAppearForm(false);

    // styleForm={
    //   'opacity': '0',
    //   'visibility': 'hidden',
    //   'transition': 'all .3s'
    // }

    // styleFormBlurry={
    //   'opacity': '0',
    //   'visibility': 'hidden',
    //   'transition': 'all .3s'
    // }
    setAppearCong(false);
  };

  // create a function to handle the sign in
  const sIn = () => {
    fetch("http://localhost:3000/inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          setMessageWelcome(data.message);
          // setIsSubscrided(true)

          setAppearCong(true);
        } else {
          setMessageWelcome(data.message);

          setAppearCong(true);
          // setIsSubscrided(false)
        }
      });
  };

  const connect = () => {
    fetch("http://localhost:3000/connexion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameLogin,
        password: passwordLogin,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.result) {
          setIsLogged(true);
          setUsernameState(data.user.username);
          setMessageWelcome(data.message + " " + usernameSate);
          // setIsSubscrided(true)

          setAppearCong(true);
        } else {
          setIsLogged(false);
          setMessageWelcome(data.message);
          setAppearCong(true);
        }
        // if(data.result){
        //   console.log("vous etes connectes")

        // }else{
        //   console.log("erreur quelque part")

        // }
      });
  };

  if (appearCong) {
    styleFormBlurry = {
      opacity: "1",
      visibility: "visible",
      transition: "all .3s",
    };
    // styleFormCong={
    //   "opacity": "1" ,
    // "visibility":" visible",
    // "transition":"all .3s"}

    styleFormCong = {
      opacity: "1",
      visibility: "visible",
      transition: "all .3s",
    };
  }

  const boolForm = () => {
    if (!appearForm) {
      setAppearForm(true);
    } else {
      setAppearForm(false);
    }
  };

  let popUpMessage = {};

  // if(isSubscrided){

  //   popUpMessage=(
  //     <h3>Cet utilisateur est déja inscrit</h3>
  //   )

  // }else{

  //   popUpMessage=(
  //     <h3>Vous vous êtes bien inscrit</h3>

  //   )

  // }

  if (appearForm) {
    styleForm = {
      opacity: "1",
      visibility: "visible",
      transition: "all .3s",
    };

    styleFormBlurry = {
      opacity: "1",
      visibility: "visible",
      transition: "all .3s",
    };
  }

  const deconnect = () => {
    setIsLogged(false);
    setAppearCong(false);
    setAppearForm(false);
  };
  if (!isLogged) {
    return (
      <div>
        <div className={styles.popUpCongrat} style={styleFormCong}>
          <h3>{messageWelcome}</h3>
          <button onClick={changeBoolAppearCong}>Fermer</button>
        </div>

        <div
          onClick={changeBoolAppearCong}
          className={styles.popUpBlurry}
          style={styleFormBlurry}
        ></div>
        <ul className={styles.Header}>
          <li>
            {" "}
            <Link href="/">OUSSNEWS</Link>
          </li>
          <li>
            {" "}
            <Link href="/bookmark">Bookmarks</Link>
          </li>
          <li>Recherche</li>
          <li
            onClick={() => {
              boolForm();
            }}
          >
            Connexion
          </li>
        </ul>

        <div className={styles.formContainer} style={styleForm}>
          <div>
            <label>S'inscrire </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Saissisez votre pseudo"
            ></input>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Saissisez votre mot de passe"
            ></input>
            <button
              onClick={() => {
                sIn();
              }}
            >
              S'inscrire
            </button>
          </div>
          <div>
            <label>Se connecter </label>
            <input
              type="text"
              onChange={(e) => setUsernameLogin(e.target.value)}
              value={usernameLogin}
              placeholder="Saissisez votre pseudo"
            ></input>
            <input
              type="password"
              onChange={(e) => setPassworLogin(e.target.value)}
              value={passwordLogin}
              placeholder="Saissisez votre mot de passe"
            ></input>
            <button onClick={connect}> Se connecter</button>
          </div>
        </div>
      </div>
    );
  } else {
    if (usernameSate.length > 10) {
      set(usernameSate.slice(0, 10) + "...");
    }
    return (
      <div>
        <div className={styles.popUpCongrat} style={styleFormCong}>
          <h3>{messageWelcome}</h3>
          <button onClick={changeBoolAppearCong}>Fermer</button>
        </div>
        <ul className={styles.Header}>
          <li>
            {" "}
            <Link href="/">OUSSNEWS</Link>
          </li>
          <li>
            {" "}
            <Link href="/bookmark">Bookmarks</Link>
          </li>
          <li>Recherche</li> <li onClick={deconnect}>Déconnexion</li>
          <li>Bienvenue {usernameSate.substring(0, 13) + "..."}</li>
        </ul>
      </div>
    );
  }
}

export default Header;
