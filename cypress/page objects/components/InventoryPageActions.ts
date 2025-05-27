export class InventoryPageActions {
    
  
    public getInventoryPageHome() {
        return cy.url().should('include', '/inventory.html');
        
      }
  
    
      
    }