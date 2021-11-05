import React from 'react'

const Avatar = ({ image, name, size }) => {
  let placeholder = image ? false : true

  switch (size){
    case 'xs':
      size = ' rounded-full h-36 xl:h-44'
      break;
    case 'md':
      size = ' rounded-full h-36 xl:h-44'
      break;
    default:
      size = ' w-28 xl:w-20'
  }

  image = image ?? 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEwMjguNCkiPjxwYXRoIGQ9Im04LjQwNjIgMTA0MS4xYy0yLjg4NTYgMS4zLTQuOTc4MSA0LTUuMzQzNyA3LjMgMCAxLjEgMC44MzI5IDIgMS45Mzc1IDJoMTRjMS4xMDUgMCAxLjkzOC0wLjkgMS45MzgtMi0wLjM2Ni0zLjMtMi40NTktNi01LjM0NC03LjMtMC42NDkgMS4zLTIuMDExIDIuMy0zLjU5NCAyLjNzLTIuOTQ1My0xLTMuNTkzOC0yLjN6IiBmaWxsPSIjMmMzZTUwIi8+PHBhdGggZD0ibTE3IDRhNSA1IDAgMSAxIC0xMCAwIDUgNSAwIDEgMSAxMCAweiIgZmlsbD0iIzM0NDk1ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMDMxLjQpIi8+PHBhdGggZD0ibTEyIDExYy0xLjI3NyAwLTIuNDk0MyAwLjI2OS0zLjU5MzggMC43NS0yLjg4NTYgMS4yNjItNC45NzgxIDMuOTk3LTUuMzQzNyA3LjI1IDAgMS4xMDUgMC44MzI5IDIgMS45Mzc1IDJoMTRjMS4xMDUgMCAxLjkzOC0wLjg5NSAxLjkzOC0yLTAuMzY2LTMuMjUzLTIuNDU5LTUuOTg4LTUuMzQ0LTcuMjUtMS4xLTAuNDgxLTIuMzE3LTAuNzUtMy41OTQtMC43NXoiIGZpbGw9IiMzNDQ5NWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAyOC40KSIvPjwvZz48L3N2Zz4='
  return (
    <img src={image} alt={name} className={`avatar mx-auto ${
      placeholder ? (
        ' shadow-md'
      ) : (
        size
      )}`}/>
  )
}

export default Avatar;