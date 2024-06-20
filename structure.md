


<!-- nav -->
outlet---|
         |-overview
         |-Account Holders---|
                     <!-- sub nav -->
                     outlet{
         |           |-add Member-->
         |           |-Member bio---|
         |                          |---edit
         |                          |---deactivate ---- confirmation 
         |           }
                         <!-- sub nav -->
         |-transactions----> transfer
         |                 |--deposit
         |                 |--withdraw
         |-admin details





member = {
   bank id
   name
   surname
   join date
   isActive
   image
   address{
      street
      city
      country
   }
   account{
      cash
      credit
   }
}