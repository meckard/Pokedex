import { useSelector } from "react-redux";
import { selectMonState } from "../Redux/pokemonSlice";
import { Tabs, Tab, TabList, TabPanel} from 'react-tabs'
import './additionalSprites.css'

export default function AdditionalSprites () {
    const monState = useSelector(selectMonState)

    return (
        monState.sprites.front_default?
        <div className='additionalSprites'>
            <Tabs>
            <h2>Additional Sprites</h2>
                <TabList>
                    <Tab>Gen1</Tab>
                    <Tab>Gen2</Tab>
                    <Tab>Gen3</Tab>
                    <Tab>Gen4</Tab>
                    <Tab>Gen5</Tab>
                    <Tab>Gen6</Tab>
                    <Tab>Gen7</Tab>
                    <Tab>Gen8</Tab>
                </TabList>

            {monState.sprites.versions['generation-i']['red-blue'].front_default?
            <TabPanel>
            <div id='gen1' className='tabContent'>
                <h2>Generation 1</h2>
                <div className='redBlue'>
                    <h3>Red and Blue</h3>
                    <img src={monState.sprites.versions['generation-i']['red-blue'].front_gray} alt='red and blue front gray sprite'/>
                    <img src={monState.sprites.versions['generation-i']['red-blue'].back_gray} alt='red and blue back gray sprite'/>
                    <img src={monState.sprites.versions['generation-i']['red-blue'].front_default} alt='red and blue front sprite'/>
                    <img src={monState.sprites.versions['generation-i']['red-blue'].back_default} alt='red and blue back sprite'/>
                </div>
                <div className='yellow'>
                    <h3>Yellow</h3>
                    <img src={monState.sprites.versions['generation-i']['yellow'].front_gray} alt='yellow front gray sprite'/>
                    <img src={monState.sprites.versions['generation-i']['yellow'].back_gray} alt='yellow back gray sprite'/>
                    <img src={monState.sprites.versions['generation-i']['yellow'].front_default} alt='yellow front sprite'/>
                    <img src={monState.sprites.versions['generation-i']['yellow'].back_default} alt='yellow back sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
                <p>There is no Gen 1 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-ii']['crystal'].front_default?
            <TabPanel>
            <div id='gen2' className='tabContent'>
                <h2>Generation 2</h2>
                <div className='gold'>
                    <h3>Gold</h3>
                    <img src={monState.sprites.versions['generation-ii']['gold'].front_default} alt='gold front sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['gold'].back_default} alt='gold back sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['gold'].front_shiny} alt='gold front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['gold'].back_shiny} alt='gold back shiny sprite'/>
                </div>
                <div className='silver'>
                    <h3>Silver</h3>
                    <img src={monState.sprites.versions['generation-ii']['silver'].front_default} alt='gold front sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['silver'].back_default} alt='gold back sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['silver'].front_shiny} alt='gold front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['silver'].back_shiny} alt='gold back shiny sprite'/>
                </div>
                <div className='silver'>
                    <h3>Crystal</h3>
                    <img src={monState.sprites.versions['generation-ii']['crystal'].front_default} alt='gold front sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['crystal'].back_default} alt='gold back sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['crystal'].front_shiny} alt='gold front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-ii']['crystal'].back_shiny} alt='gold back shiny sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 2 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-iii']['ruby-sapphire'].front_default?
            <TabPanel>
                <div id='gen3' className='tabContent'>
                <h2>Generation 3</h2>
                <div className='rubySapphire'>
                    <h3>Ruby and Sapphire</h3>
                    <img src={monState.sprites.versions['generation-iii']['ruby-sapphire'].front_default} alt='ruby-sapphire front sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['ruby-sapphire'].back_default} alt='ruby-sapphire back sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny} alt='ruby-sapphire front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['ruby-sapphire'].back_shiny} alt='ruby-sapphire back shiny sprite'/>
                </div>
                {monState.sprites.versions['generation-iii']['firered-leafgreen'].front_default?
                <div className='fireRedLeafGreen'>
                    <h3>Fire Red and LeafGreen</h3>
                    <img src={monState.sprites.versions['generation-iii']['firered-leafgreen'].front_default} alt='firered-leafgreen front sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['firered-leafgreen'].back_default} alt='firered-leafgreen back sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny} alt='firered-leafgreen front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['firered-leafgreen'].back_shiny} alt='firered-leafgreen back shiny sprite'/>
                </div>
                  :<p></p>}
                <div className='Emerald'>
                    <h3>Emerald</h3>
                    <img src={monState.sprites.versions['generation-iii']['emerald'].front_default} alt='emerald front sprite'/>
                    <img src={monState.sprites.versions['generation-iii']['emerald'].front_shiny} alt='emerald front shiny sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 3 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-iv']['diamond-pearl'].front_default?
            <TabPanel>
                <div id='gen4' className='tabContent'>
                <h2>Generation 4</h2>
                <div className='diamondPearl'>
                    <h3>Diamond and Pearl</h3>
                    <img src={monState.sprites.versions['generation-iv']['diamond-pearl'].front_default} alt='diamond-pearl front sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['diamond-pearl'].back_default} alt='diamond-pearl back sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['diamond-pearl'].front_shiny} alt='diamond-pearl front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['diamond-pearl'].back_shiny} alt='diamond-pearl back shiny sprite'/>
                </div>
                {monState.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default?
                <div className='heartGoldSoulSilver'>
                    <h3>Heart Gold and Soul Silver</h3>
                    <img src={monState.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default} alt='heartgold-soulsilver front sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['heartgold-soulsilver'].back_default} alt='heartgold-soulsilver back sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny} alt='heartgold-soulsilver front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny} alt='heartgold-soulsilver back shiny sprite'/>
                </div>
                  :<p></p>}
                <div className='platinum'>
                    <h3>Platinum</h3>
                    <img src={monState.sprites.versions['generation-iv']['platinum'].front_default} alt='platinum front sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['platinum'].front_shiny} alt='platinum front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['platinum'].front_shiny} alt='platinum front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-iv']['platinum'].back_shiny} alt='platinum back shiny sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 4 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-v']['black-white'].front_default?
            <TabPanel>
                <div id='gen5' className='tabContent'>
                <h2>Generation 5</h2>
                <div className='black-white'>
                    <h3>Black and White</h3>
                    <img src={monState.sprites.versions['generation-v']['black-white'].front_default} alt='black-white front sprite'/>
                    <img src={monState.sprites.versions['generation-v']['black-white'].back_default} alt='black-white back sprite'/>
                    <img src={monState.sprites.versions['generation-v']['black-white'].front_shiny} alt='black-white front shiny sprite'/>
                    <img src={monState.sprites.versions['generation-v']['black-white'].back_shiny} alt='black-white back shiny sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 5 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-vi']['x-y'].front_default?
            <TabPanel>
                <div id='gen6' className='tabContent'>
                <h2>Generation 6</h2>
                <div className='xy'>
                    <h3>X and Y</h3>
                    <img src={monState.sprites.versions['generation-vi']['x-y'].front_default} alt='x-y front sprite'/>
                    <img src={monState.sprites.versions['generation-vi']['x-y'].front_shiny} alt='x-y front shiny sprite'/>
                </div>
                {monState.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default?
                <div className='omegaRubyAlphaSapphire'>
                    <h3>Omega Ruby and Alpha Sapphire</h3>
                    <img src={monState.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default} alt='omegaruby-alphasapphire front sprite'/>
                    <img src={monState.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny} alt='omegaruby-alphasapphire front shiny sprite'/>
                </div>
                  :<p></p>}
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 6 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default?
            <TabPanel>
                <div id='gen7' className='tabContent'>
                <h2>Generation 7</h2>
                <div className='sunMoon'>
                    <h3>Ultra Sun and Ultra Moon</h3>
                    <img src={monState.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} alt='ultra-sun-ultra-moon front sprite'/>
                    <img src={monState.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_shiny} alt='ultra-sun-ultra-moon front shiny sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 7 sprite for this Pokemon</p>
            </TabPanel>}

            {monState.sprites.versions['generation-viii']['icons'].front_default?
            <TabPanel>
                <div id='gen8' className='tabContent'>
                <h2>Generation 8</h2>
                <div className='swordShield'>
                    <h3>Sword and Shield</h3>
                    <img src={monState.sprites.versions['generation-viii']['icons'].front_default} alt='Sword and Shield front sprite'/>
                </div>
            </div>
            </TabPanel>
            :<TabPanel>
            <p>There is no Gen 8 sprite for this Pokemon</p>
            </TabPanel>}
            </Tabs>
        </div>
        :<p>Loading</p>
    )

}