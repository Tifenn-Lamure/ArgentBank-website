import iconPencil from "../../../assets/img/pencil-solid.svg";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPencil } from "@fortawesome/free-solid-svg-icons";


interface DropdownProps {
    transactionDate: string;
    transactionDescription: string;
    transactionAmount: string;
    transactionBalance: string;
    transactionType: string;
    transactionCategory: string;
    transactionNote: string;
}


const CollapseParent = styled.div`
    overflow: hidden;
    width: 80%;
    margin: 0 auto 1em auto;
    text-align: left;

    @media screen and (max-width: 768px){
       text-align: center;
        width: 90%;
    }
`

const CollapseHead = styled.div`
    z-index: 2;
    position: relative;
    display: grid;
    grid-template-columns: 15% 50% 15% 15% 5%;
    padding: 0.3em;
    align-items: center;
    background-color: white;

    @media screen and (max-width: 768px){
        grid-template-columns: 25% 25% 20% 25% 5%;
        font-size: 14px;
    }
`

const CollapseBody = styled.div<{ $isCollapseActive: boolean }>`
    position: relative;
    max-height: ${({$isCollapseActive}) => $isCollapseActive ? '100%' : '0'};
    transform: ${({$isCollapseActive}) => $isCollapseActive ? 'translateY(0)' : 'translateY(-100%)'}; 
    z-index: 1;
    transition: all 0.5s;
    background-color:white;
    > *{
        padding: 1rem;
        max-height: ${({$isCollapseActive}) => $isCollapseActive ? '100%' : '0'};
        transform: ${({$isCollapseActive}) => $isCollapseActive ? 'translateY(0)' : 'translateY(-100%)'}; 
        transition: all 0.5s;
        overflow: hidden;
    }
`

const CollapseBodyLine = styled.div`
    display: grid;
    grid-template-columns: 15% 50% 15% 15% 5%;
    padding: 0.45em 0.3em;
    align-items: center;

    @media screen and (max-width: 768px){
        grid-template-columns: 50% 35%;
    }
`
const CollapseBodyElement = styled.div `
    @media screen and (max-width: 768px){
        margin: 0 0.5rem 0 0.5rem;
            font-size: 14px;
    }
`

const IconChevron = styled(FontAwesomeIcon)<{ $isCollapseActive: boolean }>`
    transform: ${({$isCollapseActive}) => $isCollapseActive ? 'rotate(-180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;

    @media screen and (max-width: 768px){
       font-size: 95%;  
    }
`

const ModifyCell = styled.div`
    display: flex;
    gap: 0.3em;
`


const Dropdown = ({transactionDate, transactionDescription, transactionAmount, transactionBalance, transactionType,transactionCategory, transactionNote}:  DropdownProps) => {
    
    const [isCollapseActive, updateCollapseActive] = useState(false);
    
    return(
        <CollapseParent>
            <CollapseHead onClick={() => updateCollapseActive(!isCollapseActive)}>
                <CollapseBodyElement>{transactionDate}</CollapseBodyElement>
                <CollapseBodyElement>{transactionDescription}</CollapseBodyElement>
                <CollapseBodyElement>{transactionAmount}</CollapseBodyElement>
                <CollapseBodyElement>{transactionBalance}</CollapseBodyElement>
                <IconChevron icon={faChevronUp} size="xl" $isCollapseActive={isCollapseActive}/>
            </CollapseHead>
            <CollapseBody $isCollapseActive={isCollapseActive}>
                <CollapseBodyLine>
                    <CollapseBodyElement>Transaction type</CollapseBodyElement>
                    <CollapseBodyElement>{transactionType}</CollapseBodyElement>
                </CollapseBodyLine>
                <CollapseBodyLine>
                    <CollapseBodyElement>Category</CollapseBodyElement>
                    <ModifyCell>
                        <CollapseBodyElement>{transactionCategory}</CollapseBodyElement>
                        <FontAwesomeIcon icon={faPencil} size="sm"/>
                    </ModifyCell>
                </CollapseBodyLine>
                <CollapseBodyLine>
                    <CollapseBodyElement>Note</CollapseBodyElement>
                    <ModifyCell>
                        <CollapseBodyElement>{transactionNote}</CollapseBodyElement>
                        <FontAwesomeIcon icon={faPencil} size="sm"/>
                    </ModifyCell>
                </CollapseBodyLine>
            </CollapseBody>
        </CollapseParent>

    )
}

export default Dropdown;