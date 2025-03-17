package vttp.batch4.csf.ecommerce.repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import vttp.batch4.csf.ecommerce.models.LineItem;
import vttp.batch4.csf.ecommerce.models.Order;

@Repository
public class PurchaseOrderRepository{



  @Autowired
  private JdbcTemplate template;

  // IMPORTANT: DO NOT MODIFY THIS METHOD.
  // If this method is changed, any assessment task relying on this method will
  // not be marked
  // You may only add Exception to the method's signature
  public void create(Order order) {

    template.update(Sql.UPDATE_ORDERS, order.getOrderId(),  order.getDate(), order.getName(), order.getAddress(), order.getPriority(), order.getComments());
    
  for (LineItem item: order.getCart().getLineItems()){
    
    template.update(Sql.UPDATE_CARTS, order.getOrderId(), item.getProductId(), item.getName(), item.getQuantity(), item.getPrice());

  }

  }

}
