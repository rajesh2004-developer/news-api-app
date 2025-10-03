import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import { SidebarContext } from '@/Context/SidebarContext';
import Link from 'next/link';
import { cache, useContext, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CountryAndCategoryContext } from '@/Context/CountryAndCategoryContext';
import { NewsContext } from '@/Context/NewsContext';

const SideBar = () => {
  const { open } = useSidebar();
  const { setIsOpen } = useContext(SidebarContext);
  const { country, setCountry, category, setCategory } = useContext(
    CountryAndCategoryContext
  );
  const { setNews } = useContext(NewsContext);
  useEffect(() => {
    console.log(open);
    setIsOpen(open);
  }, [open]);
  useEffect(() => {
    console.log(country, category);
  }, [country, category]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/everything');
        const data = await res.json();
        setNews(data.articles);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  useEffect(() => {
    const fetchNewsWithCountryAndCategory = async () => {
      try {
        console.log(country, category);

        const res = await fetch(
          `/api/country-and-category?country=${country}&category=${category}`
        );
        const data = await res.json();
        setNews(data.articles);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsWithCountryAndCategory();
  }, [country, category]);
  return (
    <div className='z-50'>
      <Sidebar>
        <SidebarHeader className={'p-3 mt-2'}>
          <Link
            href={'/'}
            className="font-bold text-xl sm:text-3xl whitespace-nowrap"
          >
            <span className="text-green-700">News</span> App
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className={'p-3'}>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent position="items-center">
                <SelectItem
                  value="business"
                  onClick={() => setCategory('business')}
                  className={'p-2 w-full text-center'}
                >
                  Business
                </SelectItem>
                <SelectItem
                  value="entertainment"
                  className={'p-2 w-full text-center'}
                >
                  Entertainment
                </SelectItem>
                <SelectItem
                  value="general"
                  className={'p-2 w-full text-center'}
                >
                  General
                </SelectItem>
                <SelectItem value="health" className={'p-2 w-full text-center'}>
                  Health
                </SelectItem>
                <SelectItem
                  value="science"
                  className={'p-2 w-full text-center'}
                >
                  Science
                </SelectItem>
                <SelectItem value="sports" className={'p-2 w-full text-center'}>
                  Sports
                </SelectItem>
                <SelectItem
                  value="technology"
                  className={'p-2 w-full text-center'}
                >
                  Technology
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent position="items-center">
                <SelectItem value="AE" className={'p-2 w-full text-center'}>
                  United Arab Emirates
                </SelectItem>
                <SelectItem value="AR" className={'p-2 w-full text-center'}>
                  Argentina
                </SelectItem>
                <SelectItem value="AT" className={'p-2 w-full text-center'}>
                  Austria
                </SelectItem>
                <SelectItem value="AU" className={'p-2 w-full text-center'}>
                  Australia
                </SelectItem>
                <SelectItem value="BE" className={'p-2 w-full text-center'}>
                  Belgium
                </SelectItem>
                <SelectItem value="BG" className={'p-2 w-full text-center'}>
                  Bulgaria
                </SelectItem>
                <SelectItem value="BR" className={'p-2 w-full text-center'}>
                  Brazil
                </SelectItem>
                <SelectItem value="CA" className={'p-2 w-full text-center'}>
                  Canada
                </SelectItem>
                <SelectItem value="CH" className={'p-2 w-full text-center'}>
                  Switzerland
                </SelectItem>
                <SelectItem value="CN" className={'p-2 w-full text-center'}>
                  China
                </SelectItem>
                <SelectItem value="CO" className={'p-2 w-full text-center'}>
                  Colombia
                </SelectItem>
                <SelectItem value="CU" className={'p-2 w-full text-center'}>
                  Cuba
                </SelectItem>
                <SelectItem value="CZ" className={'p-2 w-full text-center'}>
                  Czech Republic
                </SelectItem>
                <SelectItem value="DE" className={'p-2 w-full text-center'}>
                  Germany
                </SelectItem>
                <SelectItem value="EG" className={'p-2 w-full text-center'}>
                  Egypt
                </SelectItem>
                <SelectItem value="FR" className={'p-2 w-full text-center'}>
                  France
                </SelectItem>
                <SelectItem value="GB" className={'p-2 w-full text-center'}>
                  United Kingdom
                </SelectItem>
                <SelectItem value="GR" className={'p-2 w-full text-center'}>
                  Greece
                </SelectItem>
                <SelectItem value="HK" className={'p-2 w-full text-center'}>
                  Hong Kong
                </SelectItem>
                <SelectItem value="HU" className={'p-2 w-full text-center'}>
                  Hungary
                </SelectItem>
                <SelectItem value="ID" className={'p-2 w-full text-center'}>
                  Indonesia
                </SelectItem>
                <SelectItem value="IE" className={'p-2 w-full text-center'}>
                  Ireland
                </SelectItem>
                <SelectItem value="IL" className={'p-2 w-full text-center'}>
                  Israel
                </SelectItem>
                <SelectItem value="IN" className={'p-2 w-full text-center'}>
                  India
                </SelectItem>
                <SelectItem value="IT" className={'p-2 w-full text-center'}>
                  Italy
                </SelectItem>
                <SelectItem value="JP" className={'p-2 w-full text-center'}>
                  Japan
                </SelectItem>
                <SelectItem value="KR" className={'p-2 w-full text-center'}>
                  South Korea
                </SelectItem>
                <SelectItem value="LT" className={'p-2 w-full text-center'}>
                  Lithuania
                </SelectItem>
                <SelectItem value="LV" className={'p-2 w-full text-center'}>
                  Latvia
                </SelectItem>
                <SelectItem value="MA" className={'p-2 w-full text-center'}>
                  Morocco
                </SelectItem>
                <SelectItem value="MX" className={'p-2 w-full text-center'}>
                  Mexico
                </SelectItem>
                <SelectItem value="MY" className={'p-2 w-full text-center'}>
                  Malaysia
                </SelectItem>
                <SelectItem value="NG" className={'p-2 w-full text-center'}>
                  Nigeria
                </SelectItem>
                <SelectItem value="NL" className={'p-2 w-full text-center'}>
                  Netherlands
                </SelectItem>
                <SelectItem value="NO" className={'p-2 w-full text-center'}>
                  Norway
                </SelectItem>
                <SelectItem value="NZ" className={'p-2 w-full text-center'}>
                  New Zealand
                </SelectItem>
                <SelectItem value="PH" className={'p-2 w-full text-center'}>
                  Philippines
                </SelectItem>
                <SelectItem value="PL" className={'p-2 w-full text-center'}>
                  Poland
                </SelectItem>
                <SelectItem value="PT" className={'p-2 w-full text-center'}>
                  Portugal
                </SelectItem>
                <SelectItem value="RO" className={'p-2 w-full text-center'}>
                  Romania
                </SelectItem>
                <SelectItem value="RS" className={'p-2 w-full text-center'}>
                  Serbia
                </SelectItem>
                <SelectItem value="RU" className={'p-2 w-full text-center'}>
                  Russia
                </SelectItem>
                <SelectItem value="SA" className={'p-2 w-full text-center'}>
                  Saudi Arabia
                </SelectItem>
                <SelectItem value="SE" className={'p-2 w-full text-center'}>
                  Sweden
                </SelectItem>
                <SelectItem value="SG" className={'p-2 w-full text-center'}>
                  Singapore
                </SelectItem>
                <SelectItem value="SI" className={'p-2 w-full text-center'}>
                  Slovenia
                </SelectItem>
                <SelectItem value="SK" className={'p-2 w-full text-center'}>
                  Slovakia
                </SelectItem>
                <SelectItem value="TH" className={'p-2 w-full text-center'}>
                  Thailand
                </SelectItem>
                <SelectItem value="TR" className={'p-2 w-full text-center'}>
                  Turkey
                </SelectItem>
                <SelectItem value="TW" className={'p-2 w-full text-center'}>
                  Taiwan
                </SelectItem>
                <SelectItem value="UA" className={'p-2 w-full text-center'}>
                  Ukraine
                </SelectItem>
                <SelectItem value="US" className={'p-2 w-full text-center'}>
                  United States
                </SelectItem>
                <SelectItem value="VE" className={'p-2 w-full text-center'}>
                  Venezuela
                </SelectItem>
                <SelectItem value="ZA" className={'p-2 w-full text-center'}>
                  South Africa
                </SelectItem>
              </SelectContent>
            </Select>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
};

export default SideBar;
