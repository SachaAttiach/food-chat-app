import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import Cookies from 'universal-cookie';
import FoodIcon from '../assets/food.jpeg'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={FoodIcon} alt="Basketball" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Food Chat App</p>
    </div>
)
//stream allows me to get a channel list component out the box, still need to create custom list. 
const ChannelListContainer = ({ }) => {

    return (
        <>
        <SideBar />
            <div className="channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            type="team"
                        />
                    )}          
            />
            </div>
        </>
    )

}

export default ChannelListContainer;
