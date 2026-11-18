export const AvailabilityBadge = ({ isCopies }) => {
    return (
        <p className={isCopies ? "available" : "unavailable"}>
      {isCopies ? "Доступна" : "Нет в наличии"}
    </p>
    );
};
