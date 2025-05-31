#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid;

    printf("Main Process: PID = %d\n", getpid());

    pid = fork(); // Create a new process

    if (pid < 0) {
        perror("fork failed");
        exit(1); // Exit with error
    } 
    else if (pid == 0) {
        // Child process
        printf("Child Process: PID = %d, Parent PID = %d\n", getpid(), getppid());

        // Replace child process image with ls command
        printf("Child executing 'ls -l'\n");
        execl("/bin/ls", "ls", "-l", NULL);

        // If exec fails
        perror("execl failed");
        exit(1);
    } 
    else {
        // Parent process
        printf("Parent Process: PID = %d, Child PID = %d\n", getpid(), pid);
        
        // Wait for child to finish (optional)
        wait(NULL);
        
        printf("Parent process exiting.\n");
        exit(0);
    }
}
