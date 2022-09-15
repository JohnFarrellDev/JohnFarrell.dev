import { State, Animation } from "..";

export const applyAnimation = (state: State): State => {

    if(state.animations.length === 0) return state

    const animations = state.animations.pop()?.animations as Animation[]

    animations.forEach(animation => {
        state.board[animation.columnIndex][animation.rowIndex].color = animation.color 
    })

    return {
        ...state
    }
}