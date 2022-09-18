import { State, AnimationStep } from "..";

export const applyAnimation = (state: State): State => {

    if(state.animationToApply.length === 0) return state

    const animationStep = state.animationToApply.pop() as AnimationStep

    animationStep.animations.forEach(animation => {
        state.board[animation.columnIndex][animation.rowIndex].color = animation.color 
    })

    return {
        ...state,
        animationTime: animationStep.time
    }
}