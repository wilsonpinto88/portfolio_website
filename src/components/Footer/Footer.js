import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Fictitious Call</LinkTitle>
          <LinkItem href="tel: 555-0375">555-0375</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Fictitious Email</LinkTitle>
          <LinkItem href="mailto: toBeFilled@inFuture.net">toBeFilled@inFuture.net</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I may walk slowly but i never walk back</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
