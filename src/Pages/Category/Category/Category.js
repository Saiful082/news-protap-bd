import React, {  } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import UseTitle from '../../../Hooks/UseTitle';

const Category = () => {


    const categoryNews = useLoaderData();
   UseTitle('Category');

    return (
        <div>
            <h2>This is Category hsa news: {categoryNews.length}</h2>
            {
               categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
               ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;