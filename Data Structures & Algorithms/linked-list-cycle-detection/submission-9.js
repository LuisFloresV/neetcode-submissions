class Solution {
    hasCycle(head) {
        let slow = head
        let fast = head

        while (fast && fast.next) {
            slow = slow.next          // 1 step
            fast = fast.next.next     // 2 steps

            if (slow === fast) {
                return true
            }
        }

        return false
    }
}