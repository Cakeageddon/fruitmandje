import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./FruitCounter";


function App() {
    const [aardbeiCount, setAardbeiCount] = React.useState(0);
    const [banaanCount, setBanaanCount] = React.useState(0);
    const [appelCount, setAppelCount] = React.useState(0);
    const [kiwiCount, setKiwiCount] = React.useState(0);

    const [voornaam, setVoornaam] = React.useState("Chris P")
    const [achternaam, setAchternaam] = React.useState("Bacon")
    const [leeftijd, setLeeftijd] = React.useState("0")
    const [postcode, setPostcode] = React.useState("1234AA")
    const [bezorgMoment, setBezorgMoment] = useState("overdag")


    const [deliveryOption, setDeliveryOption] = React.useState("Iedere week")
    const handleDeliveryOption = (event) => {
        setDeliveryOption(event.target.value);
    };

    const [opmerkingen, setOpmerkingen] = React.useState("Typ hier uw opmerking...")

    const handleOpmerkingen = (event) => {
        setOpmerkingen(event.target.value);
    };

    const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    const [clicked, toggleClicked] = React.useState(false);

    function handleClick(e) {
        console.log("De knop is succesvol aangeklikt")
        console.log(`Wij hebben de volgende gegevens ontvangen: 
        ${aardbeiCount},${banaanCount}, ${appelCount}, ${kiwiCount}, ${voornaam}, ${achternaam},
        ${leeftijd}, ${postcode}, ${deliveryOption}, ${bezorgMoment}, ${opmerkingen}, ${checkedTerms}`)
        e.preventDefault()
        toggleClicked(!clicked);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitCounter
                emoji="🍓"
                fruitTitle="Aardbeien"
                fruitName="aardbeien"
                fruitCount={aardbeiCount}
                setFruitCount={setAardbeiCount}
            />

            <FruitCounter
                emoji="🍌"
                fruitTitle="Bananen"
                fruitName="bananen"
                fruitCount={banaanCount}
                setFruitCount={setBanaanCount}
            />

            <FruitCounter
                emoji="🍎"
                fruitTitle="Appels"
                fruitName="appels"
                fruitCount={appelCount}
                setFruitCount={setAppelCount}
            />

            <FruitCounter
                emoji="🥝"
                fruitTitle="Kiwi's"
                fruitName="kiwis"
                fruitCount={kiwiCount}
                setFruitCount={setKiwiCount}
            />

            <button type="button"
                    onClick={() => [setAppelCount(0), setAardbeiCount(0), setKiwiCount(0), setBanaanCount(0)]}
                    name="resetButton"
            >
                R-r-r-reeeseeeeet
            </button>

            <form>
                <label htmlFor="voornaam">
                    Voornaam
                    <input
                        type="text"
                        id="voornaam"
                        value={voornaam}
                        onChange={(e) => setVoornaam(e.target.value)}
                    />
                </label>

                <label htmlFor="achternaam">
                    Achternaam
                    <input
                        type="text"
                        id="achternaam"
                        value={achternaam}
                        onChange={(e) => setAchternaam(e.target.value)}
                    />
                </label>

                <label htmlFor="leeftijd">
                Leeftijd
                    <input
                        type="text"
                        id="leeftijd"
                        value={leeftijd}
                        onChange={(e) => setLeeftijd(e.target.value)}
                    />
                </label>

                <label htmlFor="postcode">
                Postcode
                    <input
                        type="text"
                        id="postcode"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                </label>

                <label htmlFor="bezorgopties">Bezorgfrequentie</label>
                <select name="bezorgopties"
                        id="bezorgopties"
                        value={deliveryOption}
                        onChange={handleDeliveryOption}>
                    <option value="Iedere week">Iedere week</option>
                    <option value="Om de week">Om de week</option>
                    <option value="Iedere maand">Iedere maand</option>
                </select>

                <label htmlFor="bezorgmoment">Overdag</label>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="overdag"
                        value="overdag"
                        checked={bezorgMoment === "overdag"}
                        onChange={(e) => setBezorgMoment(e.target.value)}
                    />
                <label htmlFor="bezorgmoment">'s Avonds</label>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="avond"
                        value="avond"
                        checked={bezorgMoment === "avond"}
                        onChange={(e) => setBezorgMoment(e.target.value)}
                    />
                <label htmlFor="opmerkingen">Opmerking(en)</label>
                <textarea
                    id="opmerkingen"
                    name="opmerkingen"
                    value={opmerkingen}
                    onChange={handleOpmerkingen}
                />


                <label htmlFor="akkoord-voorwaarden">
                <input
                    type="checkbox"
                    id="akkoord-voorwaarden"
                    name="voorwaarden"
                    checked={checkedTerms}
                    onChange={() => toggleCheckedTerms(!checkedTerms)}
                />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button
                    type="submit"
                    disabled={!checkedTerms}
                    onClick={handleClick}
                    >
                    Verstuur
                </button>
            </form>
        </>
    );
}

export default App;
