/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import ProductCard from './ProductCard'; // Adjust path as needed
import data from '../data.json';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FaTelegram, FaTiktok, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  overflow-y: auto;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  align-items: center; /* Center the icons vertically */
  gap: 20px; /* Space between icons */
  padding: 20px; /* Optional padding around the container */
`;

const IconStyle = {
  fontSize: '24px', // Adjust size of the icons
  color: '#004358', // Default color of the icons
  cursor: 'pointer', // Change cursor to pointer on hover
  transition: 'color 0.3s', // Smooth color transition on hover
};

const Hr = styled.hr`
  border: 0;
  height: 5px;
  background: linear-gradient(to right, #004358, #004358 50%, #808b96  50%);
  margin: 20px 0;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  border-radius: 2px;
  box-shadow: 10px 10px 20px rgba(0.1, 0.1, 0.1, 0.15);
`;

const Who = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family:  "Dosis", sans-serif;

`;
const handleTikTokClick = () => {
  // Attempt to open TikTok app, fallback to website
  // window.location.href = 'tiktok://@shebelemenssuit?_t=8pNzMPaADGX&_r=1'; // Replace @username with the actual username
  // setTimeout(() => {
    window.open('https://www.tiktok.com/@shebelemenssuit?_t=8pNzMPaADGX&_r=1', '_blank'); // Fallback to website
//  }, 1000); // Delay fallback to allow app launch
};

const Cards = ({ searchQuery }) => {
  
    const handlePhoneClick = () => {
      window.location.href = 'tel:0911235261';
    };
    const emailAddress = "binimelisse@gmail.com";
  
    const handleLocationClick = () => {
      window.open('https://www.google.com/maps?q=9.011704301013898,38.754134401379275', '_blank');
    };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeTab = useSelector(state => state.tabs.activeTab);

  return (
    <>
      <Container>
        {data
          .filter(item => 
            (activeTab === "All" || activeTab === item.Type) &&
            (searchQuery === '' || item.Name.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              dispatch={dispatch}
              navigate={navigate}
             
            />
          ))
        }
      </Container>
      <IconsContainer>
      <FaPhone style={{ ...IconStyle, color: '#004358' }} onClick={handlePhoneClick} />
      <FaTiktok style={IconStyle}  onClick={handleTikTokClick}/>
      <div>    <a href={`mailto:${emailAddress}`} style={{textDecoration:"none"}} ><FaEnvelope style={{ ...IconStyle, color: '#004358' }} /></a></div>
      <FaFacebook style={IconStyle} />
      <FaInstagram style={IconStyle} />
      <FaTelegram style={IconStyle} />
     
      <FaMapMarkerAlt style={{ ...IconStyle, color: '#004358' }} onClick={handleLocationClick} />
    </IconsContainer>
      <Hr />
      <Who>
        Designed by <span style={{ color: '#808b96 ', fontFamily: "Dosis" ,  fontWeight:"bold" }}>HULU GENERAL</span>
      </Who>
    </>
  );
};

export default Cards;
