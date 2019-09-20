using ProductApi.Core.Entity;
using ProductApi.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductRepository : IProductRepository
    {
        private ProductContext context = new ProductContext();
        public void Add(Product p)
        {
            context.products.Add(p);
            context.SaveChanges();
        }

        public void Delete(string ProductId)
        {
            Product b = context.products.Find(ProductId);
            context.products.Remove(b);
            context.SaveChanges();
        }

        public void Edit(Product p)
        {
            context.Entry(p).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
        }

        public Product GetById(string ProductId)
        {
            var product = (from r in context.products where r.ProductID == ProductId select r).FirstOrDefault();
            return product;
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.products;
        }
    }
}
