import { State, AnimationStep } from "..";

export const applyAnimation = (state: State) => {
    if(state.animationToApply.length === 0) return

    const animationStep = state.animationToApply.dequeue() as AnimationStep

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

    state.animationTime = animationStep.time
}