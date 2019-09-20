using ProductApi.Core.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductInitializeDb: DropCreateDatabaseIfModelChanges<ProductContext>

    {
        protected override void Seed(ProductContext context)
        {
            context.products.Add(
            new Product
            {
                ProductID = "1",
                Title = "Pen",
                Rating = 2,
                Quantity = 20,
                Color = "red",
                ImageUrl = "abc.jpg",
                inStock = true,
                Details = "very good pen",
                Price = 230,
                ExpiryDate = new DateTime().Date

            });
            context.products.Add(
                new Product
                {
                    ProductID = "2",
                    Title = "Hammer",
                    Rating = 3,
                    Quantity = 20,
                    Color = "red",
                    ImageUrl = "abc.jpg",
                    inStock = true,
                    Details = "very good pen",
                    Price = 230,
                    ExpiryDate = new DateTime().Date
                }
        );
            context.SaveChanges();
            base.Seed(context);
        }
    }
}
