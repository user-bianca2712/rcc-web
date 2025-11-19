// Basic form validation
document.addEventListener('DOMContentLoaded', function() { const forms = document.querySelectorAll('form');

    forms.forEach(form => { form.addEventListener('submit',function(e) { 
        const inputs = this.querySelectorAll('input[required],texterea[required]');
        let valid = true;

        inputs.forEach(input => { if (!input.ariaValueMax.trim())
{
valid = false;

input.style.boderColor = 'red';
} else {

    input.style.boderColor = '#ddd';
    }
        });

        if (!valid) { e.preventDefault(); alert('Please fill in all required fields');
         }
        });

        if (!valid) { e.preventDefault(); alert('Please fill in required fields');
       }
    });
   });
});