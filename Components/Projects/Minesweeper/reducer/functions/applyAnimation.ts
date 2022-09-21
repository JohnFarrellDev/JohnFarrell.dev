import { State, AnimationStep } from "..";

export const applyAnimation = (state: State): State => {

    if(state.animationToApply.length === 0) return state

    const animationStep = state.animationToApply.pop() as AnimationStep

    if(animationStep.animations === "WIPE") {
        state.board.forEach((row) => {
            row.forEach((cell) => {
              cell.color = undefined
            })
          })
    } else {
        animationStep.animations.forEach(animation => {
            state.board[animation.rowIndex][animation.columnIndex].color = animation.color 
        })
    }

    

    return {
        ...state,
        animationTime: animationStep.time
    }
}