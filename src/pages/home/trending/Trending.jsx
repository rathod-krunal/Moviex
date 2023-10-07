import React, { useState } from 'react'
import Carousal from "../../../components/carousal/Carousal"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
function Trending() {
const [endpoint,setEndPoint] = useState("day")
const {data,loading} = useFetch(`/trending/all/${endpoint}`);
    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
        
    }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">
            Trending
        </span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
