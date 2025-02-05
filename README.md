# Next.js Counter Component State Not Updating

This repository demonstrates a common issue in Next.js applications where the state of a component does not update as expected.  The issue is related to the improper use of useState hook within a functional component. The solution shows how to correctly update state using useState hook inside a functional component.

## Bug

The provided code shows a simple counter implemented in a Next.js functional component. The counter state is supposed to increment when a button is clicked, however, it remains at 0. This is due to an incorrect implementation of the useState hook. The function needs to be updated to take the count into consideration and increase the count.

## Solution

The solution addresses the issue by showing the proper way to use the useState hook in a functional component.  The new state should be based on the previous state, hence we add `count + 1` instead of just assigning 1. 
