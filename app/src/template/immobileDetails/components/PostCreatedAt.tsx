import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { CreatedAtLabel } from './styles'

interface Props {
  createdAt: string
}

export const PostCreatedAt = ({createdAt}: Props) => {

  const postDate = (): number => {
    const now = new Date();
    const createAt = new Date(createdAt)
    
    const diffDates = now.getTime() - createAt.getTime();
    const diffDays = diffDates / (1000 * 3600 * 24);
    return Math.round(diffDays);
  };
  

  return (
    <CreatedAtLabel>
      <IoTimeOutline /> Publicado há {postDate()} dias
    </CreatedAtLabel> 
  )
}
