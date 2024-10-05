class DataLogger{
    constructor(buttonId, cardContainerId, clearButton, logCountId) {

  
        this.logButton = document.getElementById(buttonId);
        this.cardContainerId = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButton);
        this.logButton = document.getElementById(logCountId);
        this.loggedData = [];
    
        this.logButton.addEventListener('click', () => this.loggedData());
        this.clearButton.addEventListener('click', () => this.clearButton());
    
    }

    
loggedData() {
    const timestamp = new Date().toLocaleDateString();
    this.loggedData.push(timestamp);
    this.updateCardConatianer();
}


























}