package vttp.batch4.csf.ecommerce.repositories;

public class Sql {

    public static final String UPDATE_ORDERS = """
            insert into orders (
            order_id, date, name, address, priority, comments)
            VALUES (?, ?, ?, ?, ?, ?)
            """;

    public static final String UPDATE_CARTS = """
            insert into carts (
            order_id, product_id, name, quantity, price )
            VALUES (?, ?, ?, ?, ?)
            """;
    
}
