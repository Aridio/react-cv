import React from 'react';
import Avatar from "./Avatar";
import Positions from "./Positions";
import SocialNetworks from "./SocialNetworks";
import wsIcon from "../assets/images/whatsapp_icon.svg";
import Spacer from "./Spacer";

const Header = ({ data }) => {
  const { personalData, socialMedias, positions } = data;

  return (
    <header className="flex gap-x-6 gap-y-6 lg:gap-y-2 xl:gap-y-6 flex-col xl:flex-row">
      <div className="flex-1 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end gap-x-6 gap-y-6 lg:gap-y-0">
        <div className="flex-initial flex items-end">
          <Avatar
            image={personalData.pic}
            name={`${personalData.firstName} ${personalData.lastName}`} 
            size="md" />
        </div>
        <div className="flex-initial flex items-end pb-0 lg:pb-7">
          <div className="flex flex-col gap-y-3 text-center lg:text-left">
            <h2 className="tracking-wider font-extralight text-3xl md:text-4xl">{personalData.firstName} {personalData.lastName}</h2>
            <a href={`mailto:${personalData.email}`} className="text-gray-400 font-medium">{personalData.email}</a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center xl:items-end pb-0 lg:pb-7 gap-y-8 md:gap-y-6 lg:gap-y-0">
        <div className="flex-1 flex flex-col xl:items-center items-left gap-y-4">
          <SocialNetworks socialNetworks={socialMedias} />
        </div>
        <div className="flex-1">
            <Positions positions={positions} />
            <Spacer size={2.5} />
            <div className="flex justify-center md:justify-end">

              <a target="_blank" rel="noreferrer" href={
                personalData.phone.whatsapp ? (
                  `https://api.whatsapp.com/send?phone=${personalData.phone.number.replace(/\D/g,'')}`
                ) : (
                  `tel:${personalData.phone.number}`
                )
              } className="font-medium text-gray-400 flex flex-row items-center">
                {personalData.phone.whatsapp ? (
                  <img className="h-4 mr-1" src={wsIcon} alt='Whatsapp'/>
                ) : ''} <span>{personalData.phone.number}</span>
              </a>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header;