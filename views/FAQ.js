import React from "react";
import { Fade } from "react-reveal";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function FAQ() {
  return (
    <div className=" flex flex-col bg-black-default px-4 sm:px-20 pb-20 pt-8 -mt-1">
      <Fade bottom>
        <h1 className="font-secondary head head-specs mb-14 relative pb-4 text-white-light text-5xl font-semibold md:font-extrabold">
          Frequently Asked Questions
        </h1>
        </Fade>
        <Fade bottom>
        <div className=" m-auto mt-32 md:w-3/4 ">
          <Accordion className="bg-black-default text-white-light">
            <Fade bottom>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className="md:w-2/4  m-auto flex justify-between items-center bg-black-default text-white-light">
                  <p className="text-xl">
                    What is an NFT and how can I buy it?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
        </Fade>
            <Fade bottom>
            <AccordionItem className="  py-10 ">
              <AccordionItemHeading>
                <AccordionItemButton className="md:w-2/4  m-auto flex justify-between items-center bg-black-default text-white-light">
                  <p className="text-xl">
                  When is public minting and at what price?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
        </Fade>
            <Fade bottom>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className="md:w-2/4  m-auto flex justify-between items-center bg-black-default text-white-light">
                  <p className="text-xl">
                  How can I check rarity of my Poopie Pitbull?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
        </Fade>
            <Fade bottom>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className="md:w-2/4  m-auto flex justify-between items-center bg-black-default text-white-light">
                  <p className="text-xl">
                  Will I have commercial rights over my Poopie Pitbull?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
        </Fade>
            <Fade bottom>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className="md:w-2/4  m-auto flex justify-between items-center bg-black-default text-white-light">
                  <p className="text-xl">
                  How can I be entered into the raffles?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
        </Fade>
            <Fade bottom>
            <AccordionItem className="  py-10 ">
              <AccordionItemHeading>
                <AccordionItemButton className="md:w-2/4  m-auto flex justify-between items-center bg-black-default text-white-light">
                  <p className="text-xl">
                  Can I choose which pitbull shelter to donate to?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
        </Fade>
          </Accordion>
        </div>
        </Fade>
    </div>
  );
}

export default FAQ;
