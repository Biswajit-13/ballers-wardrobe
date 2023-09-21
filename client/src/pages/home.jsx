import React, { useState } from 'react';
import { serieA, epl, bundesliga, laliga } from "../data/index";
import Navbar from './components/nav';
import { AiOutlineSearch } from 'react-icons/ai';
import ItemCard from './components/itemCard';
import Layout from './components/layout';
import About from './about';
import Slider from 'react-slick';
import FeaturedCard from './components/featuredCard';
import Landing from './landing';

function shuffleArray(array) {
    // This function shuffles an array randomly
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Home = () => {

    const serieATeams = Object.values(serieA[0]);
    const eplTeams = Object.values(epl[0]);
    const bundesligaTeams = Object.values(bundesliga[0]);
    const laligaTeams = Object.values(laliga[0]);
    const combinedTeams = [...serieATeams, ...eplTeams, ...bundesligaTeams, ...laligaTeams];
    const shuffledTeams = shuffleArray(combinedTeams);
    const numberOfTeamsToPick = 8;
    const selectedTeams = shuffledTeams.slice(0, numberOfTeamsToPick);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // Default sort order
    const [filteredTeams, setFilteredTeams] = useState(selectedTeams);
    const [selectedLeague, setSelectedLeague] = useState('combined'); // Default to combined

    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        console.log("Query:", query);
        const filtered = selectedTeams.filter((team) => {
            if (team.title) {
                console.log("Team Name:", team.title);
                return team.title.toLowerCase().includes(query.toLowerCase());
            }
            return false;
        });
        setFilteredTeams(filtered);
    };

    const sortByRating = () => {
        const sorted = [...filteredTeams].sort((a, b) => b.rating - a.rating);
        setFilteredTeams(sorted);
        setSortOrder('rating');
    };

    const sortByPrice = () => {
        const sorted = [...filteredTeams].sort((a, b) => a.price - b.price);
        setFilteredTeams(sorted);
        setSortOrder('price');
    };

    const sortByAlphabets = () => {
        const sorted = [...filteredTeams].sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
        setFilteredTeams(sorted);
        setSortOrder('alphabetical');
    };

    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Adjust the number of visible slides per view
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const [visibleItems, setVisibleItems] = useState(6); // Initially, display 6 items

    const handleLoadMore = () => {
        // Increase the number of visible items by 6
        setVisibleItems(visibleItems + 6);
    };

    return (
        <Layout>
            <div className='min-h-screen'>
                <Landing />
                <h1 className='pt-5 text-[34px] mb-5 items-center flex justify-center font-semibold text-hd'>Featured</h1>
                <Slider {...settings} className="mx-4">
                    {filteredTeams.map((team, index) => (
                        team.featured === true ? (
                            <div id='featured' key={index} className="px-2">
                                <FeaturedCard kit={team} />
                            </div>
                        ) : null
                    ))}
                </Slider>
                <h1 className='pt-5 text-[34px] items-center mt-10 mb-2 flex justify-center font-semibold text-hd'>Collections</h1>
                <div className='flex flex-col pb-8'>
                    <div className="pt-2 relative mx-auto text-txt">
                        <input
                            className="border-2 border-subhd bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <AiOutlineSearch className='text-hd' />
                        </button>
                    </div>
                    <div className='flex gap-2 text-xs underline text-subhd'>
                        <p
                            className={`hover:cursor-pointer hover:opacity-70 ${selectedLeague === 'combined' ? 'text-hd' : ''}`}
                            onClick={() => {
                                setSelectedLeague('combined');
                                setFilteredTeams(combinedTeams);
                            }}>all</p>
                        <p
                            className={`hover:cursor-pointer hover:opacity-70 ${selectedLeague === 'epl' ? 'text-hd' : ''}`}
                            onClick={() => {
                                setSelectedLeague('epl');
                                setFilteredTeams(eplTeams);
                            }}>epl</p>
                        <p
                            className={`hover:cursor-pointer hover:opacity-70 ${selectedLeague === 'serieA' ? 'text-hd' : ''}`}

                            onClick={() => {
                                setSelectedLeague('serieA');
                                setFilteredTeams(serieATeams);
                            }}>serie A</p>
                            <p
                            className={`hover:cursor-pointer hover:opacity-70 ${selectedLeague === 'serieA' ? 'text-hd' : ''}`}

                            onClick={() => {
                                setSelectedLeague('bundesliga');
                                setFilteredTeams(bundesligaTeams);
                            }}>bundesliga</p>
                            <p
                            className={`hover:cursor-pointer hover:opacity-70 ${selectedLeague === 'serieA' ? 'text-hd' : ''}`}

                            onClick={() => {
                                setSelectedLeague('laliga');
                                setFilteredTeams(laligaTeams);
                            }}>la liga</p>
                    </div>
                    <div className='flex justify-end gap-x-2 text-sm text-txt font-normal'>
                        <h2 className='text-subhd mr-2'>sort by</h2>
                        <p onClick={sortByRating} className={`hover:cursor-pointer hover:opacity-70 ${sortOrder === 'rating' ? 'text-hd' : ''}`}>rating</p>
                        <p onClick={sortByPrice} className={`hover:cursor-pointer hover:opacity-70 ${sortOrder === 'price' ? 'text-hd' : ''}`}>price</p>
                        <p onClick={sortByAlphabets} className={`hover:cursor-pointer hover:opacity-70 ${sortOrder === 'alphabetical' ? 'text-hd' : ''}`}>A-Z</p>
                    </div>
                </div>
                <div id='collections' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredTeams.slice(0, visibleItems).map((team, index) => (
                        <div key={index}>
                            <ItemCard kit={team} />
                        </div>
                    ))}
                </div>
                {visibleItems < filteredTeams.length && (
                    <a onClick={handleLoadMore}
                    className='text-hd flex justify-center mt-5 font-semibold text-sm hover:underline hover:text-act'
                    >View More</a>
                )}
            </div>

            <About />
        </Layout>
    );
}

export default Home;
