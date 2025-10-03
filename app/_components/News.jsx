'use client';
import { useContext, useEffect, useState } from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';
import { CountryAndCategoryContext } from '@/Context/CountryAndCategoryContext';
import { NewsContext } from '@/Context/NewsContext';

const News = () => {
  const { news } = useContext(NewsContext);
  const { country, category } = useContext(CountryAndCategoryContext);

  return (
    <div id="news" className="p-2 mt-5">
      <p className="text-2xl font-bold px-3">
        Popular News : {(country || category ?`For ${country} ${category}`:" Top Headlines")}
      </p>
      <div className="flex flex-wrap gap-4 justify-around mt-4">
        {news &&
          news.length > 0 &&
          news.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-[400px] p-2"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.source.name}
                  </Badge>
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.publishedAt}
                  </div>
                </div>

                <CardTitle className="text-xl leading-tight mb-2 line-clamp-2">
                  {article.title}
                </CardTitle>

                <CardDescription className="text-sm line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-slate-600">
                    By {article.author}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Read more
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        {!news || news.length === 0 ? (
          <p className="text-center text-gray-500">
            No news articles available.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default News;
