import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import UseTitle from '../../../Hooks/UseTitle';

const Home = () => {
    const allNews = useLoaderData();
    UseTitle('Home')
    console.log(allNews);
    return (
        <div>
            <h2>Online news portal Home: {allNews.length}</h2>
            {
                allNews?.map(news => <NewsSummaryCard
                   key={news._id}
                   news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;